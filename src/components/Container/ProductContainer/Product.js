const Product=()=> {
    return <div>
        <div className="m-4 mr-0 ml-20 border border-black w-[300px] h-[450px] bg-pink-100 hover:bg-white hover:w-[320px]">
            <div className="w-[300px] h-[450px] hover:w-[320px] hover:h-[470px]">
                <img src="https://www.ets.org/content/dam/ets-org/Rebrand/Photos/young-woman-at-university-window.jpg" alt="photo"/>
                <h1 className="text-3xl m-8 mx-6 font-bold">TOEFL</h1>
                <h4 className="m-4">Premier test of english communcation skills in an academic context</h4>
            </div>
        </div>
    </div>
}

export default Product;