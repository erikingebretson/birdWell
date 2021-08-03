class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find_by(id: params[:id])
        if @product
            render :show
        else
            render json: ["product doesnt exist :("], status: 404
        end
    end

    private 
    def product_params
        params.require(:product).permit(:id, :product_name, :size, :colorway, :price)
    end
end
