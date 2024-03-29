# from models.db import db
# from flask_jwt_extended import jwt_required
# from models.users.model import User
# from models.orders.model import Order
# from  flasgger import swag_from
# from flask import  jsonify, request, Blueprint
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from models.menu.model import MenuItem
# import math

# orders = Blueprint("orders", __name__, url_prefix="/api/v2/orders")

# # client making an order
# @orders.route("/make_order", methods=['POST'])
# # @jwt_required()
# def specific_order():
#     # # checking the user type
#     # user_logged_in=get_jwt_identity()
#     # check_user_details = User.query.filter_by(id=user_logged_in).first()
#     # userType = check_user_details.user_type
    
#     # if userType != "client":
#     #     return {"message":"Sorry only registered CLIENTS can make orders, kindly create an account"}
#     # else:            
#             def register():
#                 # made_by = user_logged_in
#                 made_by = "6"
#                 menu_item = request.json["menu_item"]
#                 quantity = request.json["quantity"]

#                 # taking the grand total
#                 menu_item_filtering = MenuItem.query.filter_by(name=menu_item).first()
#                 menu_item_id = menu_item_filtering.id
#                 item_price = menu_item_filtering.price
#                 # getting and rounding off the grand total of the order
#                 total = str(math.floor(int(quantity*item_price)))
#                 order_grand_total = request.json["grand_total"]
                

#                 delivery_address = request.json["delivery_address"]
#                 needed_by = request.json["needed_in"]
#                 status = "pending"
                
#                 if not delivery_address or not menu_item or not quantity or not needed_by:
#                     return {"message":"All fields are required"}
                
                
                
#                 new_order = Order(made_by=made_by,
#                                   menu_item=menu_item_id, 
#                                   quantity=quantity, 
#                                   delivery_address=delivery_address, 
#                                   needed_by=needed_by,
#                                   grand_total=order_grand_total,
#                                   status = status)
#                 db.session.add(new_order)
#                 db.session.commit()
#                 return {"message":"successfully made a new food order, thank you, your order will delivered as as specified", "data": new_order}
            
#             return register()
    

# @orders.route("/user/orders", methods=["GET"])
# # @jwt_required()
# def get_all():
#     # user_logged_in=get_jwt_identity()
#     # check_user_details = User.query.filter_by(id=user_logged_in).first()
#     # userType = check_user_details.user_type
#     # if userType != "client":
#     #     return {"message":"Sorry you have no orders made yet, create an account and make an order"}
    
#     # else:
#         # U_orders = Order.query.filter_by(made_by=user_logged_in)
#         U_orders = Order.query.filter_by(made_by=6)
#         response = [{
#                 "menu_item":order.menu_item,
#                 "quantity":order.quantity,
#                 "delivery_address":order.delivery_address,
#                 "made_at":order.made_at,
#                 "needed_by":order.needed_by,
#                 "status":order.status
#         } for order in U_orders]
#         return jsonify({"You have made":f"{len(response)}" +" orders", "They include":response})

# #for admins to view all orders
# @orders.route("/all", methods=["GET"])
# # @jwt_required()
# def get():
#     # user_logged_in=get_jwt_identity()
#     # check_user_details = User.query.filter_by(id=user_logged_in).first()
#     # userType = check_user_details.user_type
#     # if userType == "client" or userType == "customer":
#     #     return {"message":"Sorry but access denied, you are unauthorized"}
    
#     orders = Order.query.all()
#     response = [{
#             "id":order.id,
#             "made_by":order.made_by,
#             "menu_item":order.menu_item,
#             "quantity":order.quantity,
#             "delivery_address":order.delivery_address,
#             "made_at":order.made_at,
#             "needed_by":order.needed_by,
#             "status":order.status,
#             "updated_by":order.updated_by,
#             "updated_at": order.updated_at
#     } for order in orders]
#     return jsonify({"total":len(orders), "data":response})
 


# @orders.route("/order/<id>", methods=["GET", "PATCH", "DELETE"])
# # @jwt_required()
# def single_order(id):
#     #  # checking the user type
#     # user_logged_in=get_jwt_identity()
#     # check_user_details = User.query.filter_by(id=user_logged_in).first()
#     # userType = check_user_details.user_type
#     # user_fname = check_user_details.first_name
#     # user_lname = check_user_details.last_name
#     # user_name = user_fname + " " + user_lname
#     # if userType == "client":
#     #     return {"message":"Sorry access denied"}
    
#     # else:
#         order = Order.query.get_or_404(id)
#         if request.method == "GET":
                
#                 return {"messgae":f"You successfully retrieved order {id}", "details":order}
#         elif request.method == "PATCH":
#                 order.status = request.json["status"]
#                 # order.updated_by = user_name
#                 order.updated_by = "Mulungi Martin"
                
                 
#                 if not order.status:
#                      return {"message":"Please update the status or abort opreation"}
#                 else:
                 
#                     db.session.add(order)
#                     db.session.commit()
#                     return {"message":f"You successfully updated the status of order {order.id}"}
                
#         elif request.method == "DELETE":
#              db.session.delete(order)
#              db.session.commit()
#              return {"message":f"You successfully deleted {order.made_by}"}