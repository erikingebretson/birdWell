class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def show
        @review = Review.find_by(product_id: params[:product_id])
        if @reviews
            render :show
        end
    end

    def index
        @reviews = Reviews.all
        render :index
    end

    def review_params
        params.require(review).permit(:title, :body, :stars, :user_id, :product_id)
    end

end
