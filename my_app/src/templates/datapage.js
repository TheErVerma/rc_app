import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Database from "../firebase";
import { ref, set, get, child, onValue } from "firebase/database";
import { sh_auth } from "../firebase";
import { signOut } from 'firebase/auth';

function Datapage() {
    var [ptitle, setPtitle] = useState();
    var [pdesc, setPdesc] = useState();
    var [pprice, setPprice] = useState();
    const history = useNavigate();

    useEffect(() => {
        if(sh_auth.currentUser == null){
            history('/sign-in')
        }
    })

    const logout = () => {
        signOut(sh_auth).then(() => {
            history('/sign-in')
        }).catch((error) => {
            console.log(error.message);
        })
    }

    var db = Database;
    var current_time = new Date();
    function add_product(e) {
        e.preventDefault();
        if (ptitle && pdesc && pprice) {
            if (set(ref(db, "Products/product-" + current_time), {
                title: ptitle,
                date: String(current_time),
                description: pdesc,
                price: pprice,
            })) {
                // console.log("Product Added");
                current_time = new Date();
                document.getElementById("product_add_form").reset();
            }
        }
    }

    const starCountRef = ref(db, 'Products/');
    onValue(starCountRef, (snapshot) => {
        document.getElementById("my_products").innerHTML = "";
        const data = Object.entries(snapshot.val());
        if (data) {
            // console.log(data);
            for (let [key, value] of data) {
                // console.log(value);
                var pro_row = document.createElement('div');
                pro_row.className = "row m-0";
                var colm_cnst = 1;
                for (let [key_2, value_2] of Object.entries(value)) {
                    var pro_title = document.createElement('div');
                    if (colm_cnst == 1) {
                        pro_title.className = "col border-start-0 border-end-0 border-bottom-0 border-top-0 border p-3"
                    }else{
                        pro_title.className = "col border-end-0 border-bottom-0 border-top-0 border p-3"
                    }
                    pro_title.innerHTML = value_2;
                    pro_row.appendChild(pro_title);
                    colm_cnst++;
                }
                document.getElementById("my_products").appendChild(pro_row);
            };
        }
    });

    return (
        <>
            <div className="container-xxl py-5">
                <button className="btn btn-warning" onClick={logout} >Logout</button> 
                <div className="container">
                    <h3 className="mb-4">Add Products</h3>
                    <form onSubmit={add_product} id="product_add_form" className="mb-5">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input className="form-control" id="ptitle" placeholder="Title" onChange={(e) => setPtitle(e.target.value)} />
                                    <label htmlFor="ptitle">Title</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input className="form-control" id="pprice" placeholder="Price" onChange={(e) => setPprice(e.target.value)} />
                                    <label htmlFor="pprice">Price</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <textarea className="form-control" id="pdesc" style={{ "height": "200px" }} placeholder="Description" onChange={(e) => setPdesc(e.target.value)} ></textarea>
                                    <label htmlFor="pdesc">Description</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success">Publish</button>
                            </div>
                        </div>
                    </form>
                    <div className="card rounded ">
                        <div className="row m-0">
                            <div className="col fw-bold border-end-0 border-start-0 border-bottom-0 border-top-0 border py-4 px-3">Date</div>
                            <div className="col fw-bold border-end-0 border-bottom-0 border-top-0 border py-4 px-3">Description</div>
                            <div className="col fw-bold border-end-0 border-bottom-0 border-top-0 border py-4 px-3">Price</div>
                            <div className="col fw-bold border-end-0 border-bottom-0 border-top-0 border py-4 px-3">Title</div>
                        </div>
                        <div id="my_products" className="">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Datapage;