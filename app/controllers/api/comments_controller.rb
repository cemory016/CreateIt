class Api::CommentsController < ApplicationController
    def index
        @craft = Craft.find(params[:craft_id])
        @comments = craft.comments
        render json: @comments
    end

    # def create
    #     @comment = Comment.create!(comment_param)
    #     render json: @comment
    # end

    # def show
    #     @comment = Comment.find(params[:id])
    #     render json: @comment
    # end

    # def update
    #     @comment = Comment.fins(params[:id])
    #     @comment.update!(commen_params)
    #     render json: @comment
    # end

    # def destroy
    #     @comment = Comment.find(params[:id]).delete
    #     render status: :ok
    # end

    private

    def comment_params
        params.require(:comment).permit(:title, :text)
    end
end
