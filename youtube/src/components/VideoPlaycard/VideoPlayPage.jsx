import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import SearchVideocard from '../Searchpage/SearchVideocard'
const VideoPlayPage = () => {
    const[video,setVideo]=useState(null)
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')
    const{videoId}=useParams

    useEffect(()=>{
        const fetchdata=async()=>{
            setLoading(true)
            try {
                // const responce=await fetch(`http://localhost:3000/videos/${videoId}`)
                const response = await fetch(`http://localhost:3000/videos/${videoId}`);

                if (!response.ok) {
                    throw new Error(response.status)
                }
                const data=await response.json()
                setVideo(data)
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchdata()
    },[videoId])

    if (loading) {
        return <p>Lodding...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    if (!video) {
        return <div>Video not found</div>
    }
  return (
    <>
    
    
		<div className='playPageContainer'>
			<div className='playPage'>
				<div className='playerContainer'>
					<ReactPlayer url={video?.url} controls width='100%' height='100%' />
				</div>
				<div className='infos'>
					<div className='channelCover'>
						<div className='channelInfo'>
							<img className='channelAvatar' src={video.channelImage} alt='' />
							<div className='channelText'>
								<h4>{video.channel}</h4>
								<p>1000 Subscribers</p>
							</div>
						</div>
						<p className='sbsBtn'>SUBSCRIBE</p>
					</div>
					<div className='commentsSection'>
						<h2 className='commentsHeader'>Comments</h2>
						<div className='commentInput'>
							<img
								src='https://via.placeholder.com/40'
								alt=''
								className='avatar'
							/>
							<textarea
								className='commentBox'
								placeholder='Add a comment...'></textarea>
						</div>
						<div className='commentsList'>
							<div className='comment'>
								<img
									src='https://via.placeholder.com/40'
									alt=''
									className='avatar'
								/>
								<div className='commentContent'>
									<p className='userName'>John Doe</p>
									<p className='commentText'>
										This is a great video! I learned a lot from it!Keep the good
										work!
									</p>
									<div className='commentActions'>
										<span className='like'>Like</span>
										<span className='reply'>Reply</span>
									</div>
								</div>
							</div>
							<div className='comment'>
								<img
									src='https://via.placeholder.com/40'
									alt=''
									className='avatar'
								/>
								<div className='commentContent'>
									<p className='userName'>Jane Smith</p>
									<p className='commentText'>
										Amazing Content! Thanks for sharing.
									</p>
									<div className='commentActions'>
										<span className='like'>Like</span>
										<span className='reply'>Reply</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='svCardContainer'>
				<h2 style={{ marginBottom: '4px' }}>Related Videos</h2>
				<SearchVideocard
					title='How to become a web developer'
					views='2.3M'
					timestamp='3 days ago'
					subs='1M'
					channelImage='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
					description='In this video we are gonna learn how to make a text small'
					channel='Md Adil Hossain'
					image='https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4='
				/>
				<SearchVideocard
					title='How to become a web developer'
					views='2.3M'
					timestamp='3 days ago'
					subs='1M'
					channelImage='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
					description='In this video we are gonna learn how to make a text small'
					channel='Md Adil Hossain'
					image='https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4='
				/>
				<SearchVideocard
					title='How to become a web developer'
					views='2.3M'
					timestamp='3 days ago'
					subs='1M'
					channelImage='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
					description='In this video we are gonna learn how to make a text small'
					channel='Md Adil Hossain'
					image='https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4='
				/>
				<SearchVideocard
					title='How to become a web developer'
					views='2.3M'
					timestamp='3 days ago'
					subs='1M'
					channelImage='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
					description='In this video we are gonna learn how to make a text small'
					channel='Md Adil Hossain'
					image='https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4='
				/>
				<SearchVideocard
					title='How to become a web developer'
					views='2.3M'
					timestamp='3 days ago'
					subs='1M'
					channelImage='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
					description='In this video we are gonna learn how to make a text small'
					channel='Md Adil Hossain'
					image='https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4='
				/>
				<SearchVideocard
					title='How to become a web developer'
					views='2.3M'
					timestamp='3 days ago'
					subs='1M'
					channelImage='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
					description='In this video we are gonna learn how to make a text small'
					channel='Md Adil Hossain'
					image='https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4='
				/>
			</div>
		</div></>
  )
}

export default VideoPlayPage

