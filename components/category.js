export default function Category(props) {
    return (
        <div className="sm:w-1/5 text-left ">
            <h1 className="text-lg text-blackest">Category</h1>
            <div className="text-lg text-category">
                <div>
                    <input type="checkbox" onChange={props.onChangeFilter} value="people" />People
                </div>
                <div>
                    <input type="checkbox" onChange={props.onChangeFilter} value="premium" />Premium
                </div>
                <div>
                    <input type="checkbox" onChange={props.onChangeFilter} value="pets" />Pets
                </div>
                <div>
                    <input type="checkbox" onChange={props.onChangeFilter} value="food" />Food
                </div>
                <div>
                    <input type="checkbox" onChange={props.onChangeFilter} value="landmarks" />Landmarks
                </div>
                <div>
                    <input type="checkbox" onChange={props.onChangeFilter} value="cities" />Cities
                </div>
                <div>
                    <input type="checkbox" onChange={props.onChangeFilter} value="nature" />Nature
                </div>
            </div >
            <hr className="mr-10" />
            <div className="text-lg text-category">
                <div>
                    <input type="checkbox" />Lower than $20
                </div>
                <div>
                    <input type="checkbox" />$20 - $100
                </div>
                <div>
                    <input type="checkbox" />$100 - $200
                </div>
                <div>
                    <input type="checkbox" />More than $200
                </div>
            </div>

        </div >
    )
}