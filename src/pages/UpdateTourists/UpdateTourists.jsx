import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateTourists = () => {
    const updateInfo = useLoaderData();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        fetch(`http://localhost:4000/tourists/${updateInfo._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount == 0) {
                    toast.warn("Change info to update")
                }
                else if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Your document has been updated",
                        icon: "success"
                    });
                }
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="card shrink-0 w-full max-w-4xl border mx-auto shadow-2xl bg-base-100 mb-10">
            <ToastContainer />
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl font-bold text-center">Update Tourist Details</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Image Url</span>
                    </label>
                    <input type="text" placeholder="http://bufferimage1421" defaultValue={updateInfo?.imageURL} className="input input-bordered" {...register("imageURL", { required: true })} />
                    {errors.imageURL && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="grid grid-cols-2 gap-5">

                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input type="text" placeholder="Rome" className="input input-bordered" defaultValue={updateInfo?.tourists_spot_name} {...register("tourists_spot_name", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className="label-text">Select country</span>
                        </label>
                        <select className="select select-bordered w-full" defaultValue={updateInfo?.country_Name} {...register("country_Name", { required: true })}>
                            <option disabled selected>Select Country</option>
                            <option>France</option>
                            <option>Italy</option>
                            <option>Spain</option>
                            <option>England</option>
                            <option>Netherlands</option>
                            <option>Switzerland</option>
                        </select>
                        {errors.country_Name && <span className="text-red-600">This field is required</span>}
                    </div>

                </div>
                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="location" className="input input-bordered" defaultValue={updateInfo?.location} {...register("location", { required: true })} />
                    {errors.location && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Bio" defaultValue={updateInfo?.short_description} {...register("short_description", { required: true })}></textarea>
                    {errors.short_description && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="grid grid-cols-3 gap-5">
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input type="number" placeholder="$400" className="input input-bordered" defaultValue={updateInfo?.average_cost} {...register("average_cost", { required: true })} />
                        {errors.average_cost && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input type="text" placeholder="Winter" className="input input-bordered" defaultValue={updateInfo?.seasonality} {...register("seasonality", { required: true })} />
                        {errors.seasonality && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label font-semibold">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input type="text" placeholder="7 days" className="input input-bordered" defaultValue={updateInfo?.travel_time} {...register("travel_time", { required: true })} />
                        {errors.travel_time && <span className="text-red-600">This field is required</span>}
                    </div>
                </div>
                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text">Total Visitors Per Year</span>
                    </label>
                    <input type="text" placeholder="10000" className="input input-bordered" defaultValue={updateInfo?.totalVisitorsPerYear} {...register("totalVisitorsPerYear", { required: true })} />
                    {errors.totalVisitorsPerYear && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateTourists