import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddBook.css';

const AddBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [thumbnailUrl, setThumbnailUrl] = useState(null)
    const handleUpload =(event)=> {
        const imageData = new FormData();
        imageData.set('key', '8dce128515bf5e69ae560e543b7c1c53');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function (response) {
            setThumbnailUrl(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    const onSubmit = data => {
        const bookData = {
            title: data.bookName,
            authors: [data.authorName],
            price: data.price,
            thumbnailUrl: thumbnailUrl
          };
        
        fetch('https://serene-falls-59401.herokuapp.com/addBook', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("book added successfully, Go to the home page to see the book")
            }
        })
    };

    return (
        <div className="addBook my-3 mx-3">
            <h5 className="my-2">Add Book</h5>
            <form className="row justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12 col-md-6">
                    <label htmlFor="bookName">Book name</label>
                    <input className="form-control mb-3" {...register("bookName", { required: true })} placeholder="book name"/>
                    {errors.bookName && <span>please type book name</span>}
                    <label htmlFor="price">Add price</label>
                    <input className="form-control mb-3" {...register("price", { required: true })} placeholder="book price"/>
                    {errors.bookName && <span>please add book price</span>}
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="authorName">Author name</label>
                    <input className="form-control mb-3" {...register("authorName", { required: true })} placeholder="author name" />
                    {errors.authorName && <span>type an author name</span>}
                    <label htmlFor="bookCover">Add book cover</label>
                    <br/>
                    <input type="file" onChange={handleUpload} placeholder="Add book cover photo" required/>
                </div>

                <input className="btn btn-primary my-4" type="submit" />
            </form>
        </div>
    );
};

export default AddBook;