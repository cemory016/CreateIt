class Api::CraftsController < ApplicationController
    def index
        user = User.find(params[:user_id])
        @crafts = user.crafts
        render json: @crafts
    end

    def create
        @craft = Craft.create!(craft_params)
        render json: @craft
    end

    def show
        @craft = Craft.find(params[:id])
        render json: @craft
    end

    def update
        @craft = Craft.find(params[:id])
        @craft.update!(craft_params)

        render json: @craft
    end

    def destroy
        @craft = Craft.find(params[:id]).delete
        render status: :ok
    end

    private

    def craft_params
        params.require(:craft).permit(:title, :photo_url, :link_url)
    end
end
