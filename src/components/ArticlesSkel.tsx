import React from 'react'
import Shimmer from '../skeletons/Shimmer'
import SkeletonElement from '../skeletons/SkeletonElement'

function ArticlesSkel() {
    return (
        <div className="skeleton_wrapper"> 
            <div className="skelton_article">
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default ArticlesSkel
