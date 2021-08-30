import React from 'react'
import { handleThumbnail } from "../api";

describe('handleThumbnail',()=>{

    
    it('should return img element with te according provided link as src ', ()=>{
        const ThumbnailLink= 'www.yt.com'

        const expectedImgElement= <img src={ThumbnailLink} alt="post" className="content-image" />
        

        expect(handleThumbnail(ThumbnailLink)).toStrictEqual(expectedImgElement)
    })

    it('should return Icon if thumbnail=self ', ()=>{
        const ThumbnailLink= 'self'        

        expect(handleThumbnail(ThumbnailLink)).toMatchSnapshot()
    })

    it('should return Icon if thumbnail=spoiler ', ()=>{
        const ThumbnailLink= 'spoiler'        

        expect(handleThumbnail(ThumbnailLink)).toMatchSnapshot()
    })

    it('should return Icon if thumbnail=default ', ()=>{
        const ThumbnailLink= 'default'        

        expect(handleThumbnail(ThumbnailLink)).toMatchSnapshot()
    })

    it('should return Icon if thumbnail=image ', ()=>{
        const ThumbnailLink= 'image'        

        expect(handleThumbnail(ThumbnailLink)).toMatchSnapshot()
    })
})
