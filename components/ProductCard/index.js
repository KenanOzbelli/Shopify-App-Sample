import { Card } from '@shopify/polaris';
import React from 'react';
import { MediaCard } from '@shopify/polaris';
const ProductCard = (props) => (
    <>
    <MediaCard 
        portrait 
        key={props.item.id} 
        title={props.item.title}
        popoverActions={[{content:'dismiss', onAction:()=> {props.dismiss(props.item.id)}}]}
        >
        <img src={props.item.images[0] ? props.item.images[0].originalSrc : 'http://via.placeholder.com/926x617'} style={{objectFit:'contain', objectPosition:'center', width:'100%'}}/>
    </MediaCard>
    </>

)


export default ProductCard;