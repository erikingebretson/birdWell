# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  review_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#
class User < ApplicationRecord
    attr_reader :password
    attr_reader :passwordCheck

    validates :email, uniqueness: true, presence: true
    validates :session_token, presence: true
    validates :password, presence: true, length: {minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token

    has_many :reviews,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :Review

    has_one :cart,
        foreign_key: :user_id,
        class_name: :Cart

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def passwordCheck=(passwordCheck)
        @passwordCheck = passwordCheck
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
