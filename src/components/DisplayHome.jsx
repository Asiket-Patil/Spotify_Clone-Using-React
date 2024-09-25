import React from 'react'
import Navabar from './Navabar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
    return (
        <>
            <Navabar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-x-auto'>
                    {
                        albumsData.map((item, index) => (
                            <AlbumItem 
                                key={index} 
                                name={item.name} 
                                desc={item.desc} 
                                id={item.id} 
                                image={item.image} 
                                className='flex-shrink-0 w-[250px]' // Ensure no shrinking and fixed width
                            />
                        ))
                    }        
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
                <div className='flex overflow-x-auto'>
                    {
                        songsData.map((item, index) => (
                            <SongItem
                                key={index} 
                                name={item.name} 
                                desc={item.desc} 
                                id={item.id} 
                                image={item.image} 
                                className='flex-shrink-0 w-[250px]' // Ensure no shrinking and fixed width
                            />
                        ))
                    }        
                </div>
            </div>
        </>
    )
}

export default DisplayHome
