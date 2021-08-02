class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        
        if params[:user][:password] != params[:user][:passwordCheck]
            render json: ['Input passwords do not match.'], status: 401
        elsif@user.save 
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user.find_by(email: params[:email])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :passwordCheck)
    end
end
