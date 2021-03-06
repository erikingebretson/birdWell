class Api::ProductsController < ApplicationController
    def index
        @products = Product.all.includes(:reviews)
        @products.includes(:photos)
        # @products = Product.all
        render :index
    end

    def show
        @product = Product.with_attached_photos.find_by(id: params[:id])
        if @product
            render :show
        else
            render json: ["product doesnt exist"], status: 404
        end
    end

    def update 
        @product = Product.find_by(id: params[:id])
        if @product
            @product.update(product_params)
            render :show
        end
    end

    def create 
        @product = Product.new(product_params)
        
        if @product.save!
            render :show
        else
            # render json: ["Must Select Shoe Size"], status: 422
            render json: @product.errors.full_messages, status: 401 
        end
    end

    def destroy
        @product = Product.find_by(id: params[:id])
        @product.destroy
    end


    private 
    def product_params
        params.require(:product).permit(:id, :product_name, :colorway, :price, :cart_id, :gender, :size, :cart_photo_url)
    end
end
