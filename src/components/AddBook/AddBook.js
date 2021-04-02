import React from 'react';
import { useForm } from "react-hook-form";
import './AddBook.css';

const AddBook = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleUpload =(event)=> {
        console.log("from upload",event.target.files[0])
    }
    const onSubmit = data => console.log(data);

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