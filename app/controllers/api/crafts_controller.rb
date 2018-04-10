class Api::CraftsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @crafts = @user.crafts
        render json: {
        crafts: @crafts
    }
    end

    # def create
    #     @user = User.find(params[:user_id])
    #     @craft = Craft.create!(craft_params)
    #     render json: {
    #         craft: @craft
    #     }
    # end

    def show
        @craft = Craft.find(params[:id])
        render json: {
            craft: @craft
        }
    end

    # def update
    #     @user = User.find(params[:user_id])
    #     @craft = Craft.find(params[:id])
    #     @craft.update!(craft_params)
    #     render json: {
    #         craft: @craft
    #     }
    #     render json: @craft
    # end

    # def destroy
    #     @craft = Craft.find(params[:id]).destroy
    #     render status: :ok
    # end

    private

    def craft_params
        params.require(:craft).permit(:title, :photo_url, :link_url)
    end
    
end
