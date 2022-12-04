import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';



const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key

    console.log('image', imageHostKey)

    const [carData, setCarData] = useState([])
    const categoryId = carData;
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCarData(data)
            })
    }, []);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const handleAddproducts = (e) => {
        e.preventDefault()
        const form = e.target;
        const brand = form.brand.value;
        const email = form.email.value;
        const originalprice = form.originalprice.value;
        const resaleprice = form.resaleprice.value;
        const YearOfPurchase = form.YearOfPurchase.value;
        const condition = form.condition.value;
        const location = form.location.value;
        const details = form.details.value;
        const title = form.title.value;
        const author = {
            name: user.displayName,

        };

        const image = form.image.files[0];
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                const AddProduct = {
                    image: imageData.data.url,

                }
                const brandId = form.categoryId.value;
                const product = {
                    brand,
                    email,
                    categoryId: brandId,
                    originalprice,
                    resaleprice,
                    YearOfPurchase,
                    condition,
                    location,
                    title,
                    details,
                    date,
                    image_url: imageData.data.url,
                    author
                }

                fetch('http://localhost:5000/addcar', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        form.reset()
                        navigate('/dashboard/manageproducts')
                        toast.success('Order successfully', { autoClose: 500 })
                    })
                console.log("All Product", AddProduct);
            })


    }
    return (
        <div>
            {
                carData.map(cardt =>
                    console.log(cardt._id)
                )
            }
            <div className="hero ">
                <div className="hero-content flex-col">
                    <form onSubmit={handleAddproducts} className="card">
                        <div className="card-body">
                            <div className="form-control grid lg:grid-cols-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">brand</span>
                                </label>
                                <input type="text" name="brand" placeholder="brand" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Car Category</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Car Title</span>
                                </label>
                                <input type="text" name="title" placeholder="title" className="input input-bordered" />

                            </div>
                            <select
                                name="categoryId" className="select select-bordered w-full max-w-xs"
                            >
                                {carData?.map((category) => (
                                    <option key={category._id}

                                        value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">original_price</span>
                                </label>
                                <input type="text" name='originalprice' placeholder="original_price" className="input input-bordered" />
                            </div>
                            <div className="col-span-full   sm:col-span-3">
                                <label className='block mb-2 text-sm'>
                                    Select Car Image:
                                </label>
                                <div htmlFor='image' className='border border-4 bg-white border-black'>
                                    <input

                                        type='file'
                                        id='image'
                                        name='image'
                                        accept='image/*'
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">resalePrice</span>
                                </label>
                                <input type="text" name='resaleprice' placeholder="resalePrice" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="text" value={date} placeholder="Type here" className="input input-bordered input-primary w-full" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">details</span>
                                </label>
                                <input type="text" name='details' placeholder="details" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">YearOfPurchase</span>
                                </label>
                                <input type="text" name='YearOfPurchase' placeholder="YearOfPurchase" className="input input-bordered" />
                            </div>
                            <select name='condition' className="form-control  select select-bordered w-full max-w-xs">
                          <option disabled selected>condition</option>
                          <option>good</option>
                          <option>fair</option>
                          <option>excellent</option>
                            </select>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">location</span>
                                </label>
                                <input type="text" name='location' placeholder="location" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Products</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddProducts;