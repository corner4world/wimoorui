/** When your routing erp is too long, you can split it into small modules **/
export default [
 {
 		path:"shipmentdetails",
 		name:'shipmentdetails',
 		component:()=>import("@/views/erp/ship/shipment_add/approve/index")  
  },
  {
  	path:"invoice/addshipment",
  	name:'addshipment',
  	component:()=>import("@/views/erp/ship/shipment_add/create/index")  
  },
  {
  	path:"a/p/c",
  	name:'edit_calcuiation_plan',
  	component:()=>import("@/views/amazon/profit/config/components/edit_plan")  
  },
]
