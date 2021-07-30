class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            render json: ['invalid credentials'], status: 401
        else
            login!(@user)
            render json: :show
        end
    end

    def destroy
        @user = current_user
        if @user
            loggout!
        else
            render json: ['No user signed in'], status: 404
        end
    end
end
