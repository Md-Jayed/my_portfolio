import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                {/* <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Computer Science Teacher'}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div> */}
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - 2022'} 
                        title={'B.Sc in Computer Science & Engineering'}
                        subTitle={'BGC Trust University Bangladesh'}
                        text={"BGC Trust University Bangladesh is a private university in Bangladesh, established in 2001.The university is 34 km from the port city Chittagong at a place popularly known as BGC Biddyanagar by the side of the Chittagong Cox's Bazar Highway Road."} 
                    />
                    <ResumeItem 
                        year={'2016 - 2018'} 
                        title={'A - Levels'}
                        subTitle={'Hajerataju College'}
                        text={'Hazera-Taju University College is a non-government honors level degree college situated at Chandgaon Thana, Chittagong, Bangladesh.As our country is still a developing country, we prepare our students both mentally and technically.'} 
                    />
                    <ResumeItem 
                        year={'2014 - 2016'} 
                        title={'High School Graduation'}
                        subTitle={'Mern Sun School & College'}
                        text={'Mern Sun School & College is an academic institute located at K B Aman Ali Chandgaon Chittagong.  Its institute code (EIIN) is 104105. It was established on 01 December, 1998. The institute has following 3 disciplines : Science,Humanities,Business Studies'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
