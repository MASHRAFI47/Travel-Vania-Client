import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import Swal from "sweetalert2"

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { imageURL, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totaVisitorsPerYear, userEmail, userName } = data;
    const email = user.email
    const newSpot = { email, imageURL, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totaVisitorsPerYear, userEmail, userName }
    console.log(data)

    fetch('http://localhost:4000/tourists', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newSpot)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Your data has been added",
            icon: "success"
          });
        }
      })
  }

  return (
    <div className="card shrink-0 w-full max-w-4xl border mx-auto shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-bold text-center">Add Tourist Spot</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Image Url</span>
          </label>
          <input type="text" placeholder="http://bufferimage1421" className="input input-bordered" {...register("imageURL", { required: true })} />
          {errors.imageURL && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="grid grid-cols-2 gap-5">

          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Tourist Spot Name</span>
            </label>
            <input type="text" placeholder="Rome" className="input input-bordered" {...register("tourists_spot_name", { required: true })} />
            {errors.tourists_spot_name && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Country Name</span>
            </label>
            <input type="text" placeholder="France" className="input input-bordered" {...register("country_Name", { required: true })} />
            {errors.country_Name && <span className="text-red-600">This field is required</span>}
          </div>

        </div>
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Location</span>
          </label>
          <input type="text" placeholder="location" className="input input-bordered" {...register("location", { required: true })} />
          {errors.location && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Short Description</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Bio" {...register("shortDescription", { required: true })}></textarea>
          {errors.shortDescription && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Average Cost</span>
            </label>
            <input type="text" placeholder="$400" className="input input-bordered" {...register("average_cost", { required: true })} />
            {errors.average_cost && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Seasonality</span>
            </label>
            <input type="text" placeholder="Winter" className="input input-bordered" {...register("seasonality", { required: true })} />
            {errors.seasonality && <span className="text-red-600">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label font-semibold">
              <span className="label-text">Travel Time</span>
            </label>
            <input type="text" placeholder="7 days" className="input input-bordered" {...register("travel_time", { required: true })} />
            {errors.travel_time && <span className="text-red-600">This field is required</span>}
          </div>
        </div>
        <div className="form-control">
          <label className="label font-semibold">
            <span className="label-text">Total Visitors Per Year</span>
          </label>
          <input type="text" placeholder="10000" className="input input-bordered" {...register("totaVisitorsPerYear", { required: true })} />
          {errors.totaVisitorsPerYear && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">User Email</span>
              </label>
              <input type="email" placeholder="dalph@gmail.com" className="input input-bordered" {...register("userEmail", { required: true })} />
              {errors.userEmail && <span className="text-red-600">This field is required</span>}
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">User Name</span>
              </label>
              <input type="text" placeholder="Dalph Rolan" className="input input-bordered" {...register("userName", { required: true })} />
              {errors.userName && <span className="text-red-600">This field is required</span>}
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddTouristSpot