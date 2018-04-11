class Api::CommentsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @craft = Craft.find(params[:craft_id])
        @comments = @craft.comments
        render json: {
            comments: @comments
    }
    end

    def create
        # @user = User.find(params[:user_id])
        @craft = Craft.find(params[:craft_id])

        @comment = Comment.new(comment_params)

        # @user.comments << @comment
        @craft.comments << @comment

        # @user.save
        @craft.save

        render json: @comment
    end

    def show
        @comment = Comment.find(params[:id])
        render json: {
            comment: @comment
    }
    end

    # def update
    #     @comment = Comment.fins(params[:id])
    #     @comment.update!(commen_params)
    #     render json: @comment
    # end

    def destroy
        @comment = Comment.find(params[:id]).delete
        render status: :ok
    end

    private

    def comment_params
        params.require(:comment).permit(:title, :text)
    end
end
