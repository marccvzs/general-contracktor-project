class PostsController < ApplicationController
    
    def index 
        posts = Post.all
        render json: posts, status: :ok
    end

    def myposts 
        posts = Post.all.where(client_id: session[:client_id])
        render json: posts, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private 

    def post_params
        params.permit(:client_id, :project_id)
    end
end
