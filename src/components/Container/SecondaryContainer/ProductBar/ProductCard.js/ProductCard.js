const ProductCard =()=> {
    return <div className="flex border-t border-b border-gray-200 mt-24 h-60 hover:bg-teal-900">
        <div className="w-48 mt-12 hover:w-56">
            <img src="https://www.ets.org/content/dam/ets-org/Rebrand/Photos/side-view-smiling-white-male-student-2000.jpg" alt="photo"/>
        </div>
        <div>
            <h1 className="text-white text-3xl mt-12 mx-6">Assesment Products</h1>
            <p  className="text-white text-lg mt-4  mx-6">Helping people everywhere demonstrate proficiency and realize their potential through research-based assesments.</p>
        </div>
    </div>
}

export default ProductCard;