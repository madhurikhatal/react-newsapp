import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <NewsItems title="main News" description="this is description" />
                        </div>
                        <div className='col-md-4'>
                            <NewsItems title="main News" description="this is description" />
                        </div>
                        <div className='col-md-4'>
                            <NewsItems title="main News" description="this is description" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <NewsItems title="main News" description="this is description" />
                        </div>
                        <div className='col-md-4'>
                            <NewsItems title="main News" description="this is description" />
                        </div>
                        <div className='col-md-4'>
                            <NewsItems title="main News" description="this is description" />
                        </div>
                    </div>
                </div>
               
            </>
        )
    }
}
