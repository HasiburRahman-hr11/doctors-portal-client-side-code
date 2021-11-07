import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


import author1 from '../../images/people-1.png';
import author2 from '../../images/people-2.png';
import author3 from '../../images/people-3.png';

const blogs = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto facilis eius ipsam itaque rerum ducimus! Nulla ratione vel non molestiae distinctio molestias expedita animi eos, laudantium illum similique! Possimus, aut.',
        author: 'Rasheed Kabir',
        publishedAt: '22 Aug 2021',
        authorImage: author1
    },
    {
        title: '2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto facilis eius ipsam itaque rerum ducimus! Nulla ratione vel non molestiae distinctio molestias expedita animi eos, laudantium illum similique! Possimus, aut.',
        author: 'Dr. Camilia',
        publishedAt: '28 Sep 2021',
        authorImage: author2
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto facilis eius ipsam itaque rerum ducimus! Nulla ratione vel non molestiae distinctio molestias expedita animi eos, laudantium illum similique! Possimus, aut.',
        author: 'Swang Mitchel',
        publishedAt: '20 Oct 2021',
        authorImage: author3
    }
]

const BlogSection = () => {
    return (
        <Box component="div" className="blog-section" id="blog" sx={{
            paddingTop: {
                md: '90px',
                xs: '70px'
            }
        }}>
            <Container fixed>
                <Box component="div" className="section-header" sx={{
                    marginBottom: '50px'
                }}>
                    <Typography variant="h5" component="h5">
                        OUR BLOGS

                    </Typography>
                    <Typography variant="h2" component="h2">
                        From Our Blog News
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {blogs.map((blog, index) => (
                        <Grid item md={4} xs={12} key={index}>
                            <Box component="div" className="blog-item" sx={{
                                padding: '20px 20px',
                                borderRadius: '5px',
                                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                cursor:'pointer'
                            }}>
                                <Box component="div" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom:'20px'
                                }}>
                                    <Avatar alt={blog.author} src={blog.authorImage} />
                                    <Box component="div" sx={{
                                        marginLeft:'15px'
                                    }}>
                                        <Typography variant="h6" component="h6" sx={{
                                            fontSize:'15px',
                                            fontWeight:'bold'
                                        }}>
                                            {blog.author}
                                        </Typography>
                                        <Typography 
                                        variant="p" 
                                        component="p" 
                                        className="blog-date">
                                            {blog.publishedAt}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Typography variant="h4" component="h6" sx={{
                                    fontSize:'20px',
                                    fontWeight:'bold',
                                    marginBottom:'25px'
                                }}>
                                    {blog.title}
                                </Typography>
                                <Typography variant="p" component="p">
                                    {blog.description}
                                </Typography>

                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default BlogSection;