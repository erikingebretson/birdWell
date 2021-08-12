class Api::CartsController < ApplicationController
    def create
        # cart_params ||= cart_params[:cart]
        cart_params[:user_id] != "" ? @cart = Cart.new(cart_params) : @cart = Cart.new()

        if @cart.save!
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
            render json: ['cart not found'], status: 404
        end
    end

    def update
        @cart = Cart.find_by(id: params[:id])
        if @cart 
            @cart.update(cart_params)
            render :show
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart = Cart.find(params[:id])
        @cart.destroy
    end

    private
    def cart_params
        params.require(:cart).permit(:id, :product_id, :user_id )
    end
end
