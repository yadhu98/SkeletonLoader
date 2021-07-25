import React from 'react'
import Shimmer from '../skeletons/Shimmer'
import SkeletonElement from '../skeletons/SkeletonElement'

function ProfileSkel() {
    return (
        <div className="skeleton_wrapper_prof">
            <div className="skeleton_profile">
            <SkeletonElement type="title"/>
            <SkeletonElement type="title"/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default ProfileSkel
