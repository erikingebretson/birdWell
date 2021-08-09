class Api::CartsController < ApplicationController
    def create
        @cart = Cart.new(cart_params)
        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 401
        end
    end

    def show
        @cart = Cart.find_by(id: params[:id])

        if @cart
            render :show
        else
            render json: @cart.errors.full_messages, status: 404
        end
    end

    def update
        @cart = Cart.find_by(id: params[:id])
        if @cart 
            @cart.update(cart_params)
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart = Cart.find_by(id: params[:id])
        @cart.delete
    end

    private
    def cart_params
        params.require(:cart).permit(:id, :product_id, :user_id)
    end
end
