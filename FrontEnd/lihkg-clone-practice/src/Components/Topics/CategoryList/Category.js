function Category(props){
    return (
        <div className="category col-6 pt-3">
            <a href={"/"+props.catnum}>{props.category}</a>
        </div>
    );
}

export default Category