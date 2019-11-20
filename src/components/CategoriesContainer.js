import React from 'react';

export class CategoriesContainer extends React.Component {
    render() {
        console.log(this.props.categories)
        const mappedCategories = this.props.categories.map(category => {
            return <button className={category === this.props.selectedCategory ? 'selected' : null} onClick={() => this.props.changeSelectedCategory(category)}>{category}</button>
        })
        return (
            <div  className="categories">
            <h5>Category filters</h5>
                {mappedCategories}
            </div>
        );
    }
}