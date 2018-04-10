class Api::UsersController < ApplicationController
    def index
        @users = User.all 
        render json: @users
    end

    def create
        @user = User.create!(user_params)
        render json: @user
    end

    def show
        @user = User.find(params[:user_id])
        @crafts = @user.crafts
        render json: {
            user: @user,
            crafts: @crafts
        }
    end

    def update
        @user = User.find(params[:user_id])
        @user.update!(user_params)
        render json: @user
    end

    def destroy
        @user = User.find(params[:user_id]).destroy
        render status: :ok
    end

    private

    def user_params
        params.require(:user).permit(:firstName, :lastName, :email, :photo_url, :userName)
    end
end
