import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const AddCountries = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        fetch('https://travel-vania-server.vercel.app/countries', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success("Country data inserted")
        })
    }
    return (
        <div className='justify-center items-center mt-10 container mx-auto'>
            <div className="card mx-auto shrink-0 w-full max-w-lg shadow-2xl bg-base-100 border mb-10">
                <ToastContainer />
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold text-center'>Add Country</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input type="text" placeholder="France" className="input input-bordered" {...register("country_Name", { required: true })} />
                        {errors.country_Name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="http://pixso.com" className="input input-bordered" {...register("imageURL", { required: true })} />
                        {errors.imageURL && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="add texts..." {...register("short_description", { required: true })}></textarea>
                        {errors.short_description && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-primary border-none bg-[#F2611C]">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCountries