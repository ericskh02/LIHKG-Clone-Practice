import CategoryData from "./CategoryData";

import Category from './Category'

import LoginButton from '../../Account/Login/LoginButton'

function CategoryList(props) {

    function generateCategories() {
        let gen = [];
        let categories = CategoryData();
        for (var key in categories) {
            gen.push(<Category key={key} catnum={key} category={categories[key]} />);
        }
        return gen;
    }
    if (props.show) {
        return (
            <div className="visible position-absolute zindex-sticky bg-white min-vh-100 pt-5 ml-2 pl-5">
                <div className="row">
                    <LoginButton />
                </div>
                <div className="row">
                    {generateCategories()}
                </div>
            </div>
        );
    } else {
        return (
            <div className="invisible position-absolute zindex-sticky bg-white min-vh-100 pt-5 ml-2 pl-5">
                <div className="row">
                    <LoginButton />
                </div>
                <div className="row">
                    {generateCategories()}
                </div>
            </div>
        );
    }

}

export default CategoryList