import React, { createRef, useEffect, useRef, useState } from 'react';
import Box from "@mmasco-atoms/Box";
import Container from "@mmasco-atoms/Container"
import styled from 'styled-components';
import Button from '@mmasco-atoms/Button';
import { Center } from 'src/styled.globals';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import Image from 'next/image';
import Link from 'next/link';
import { projectColors } from 'src/styles/theme';
import Typography from '@mmasco-atoms/Typography';
import { rooms } from 'data';
import { slugify } from 'src/utils';

const CarouselContainer = styled(Box)`
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: 1rem auto;
    /* margin-top: 256px; */
`
const CarouselScrollerContainer = styled(Box) <{ h: number }>`
    width: 100%;
    height: ${({ h }) => `${h * 1.33}px`};
    z-index: 1;
    overflow: hidden;
    
    @media (min-width: 600px) {
        height: ${({ h }) => `${h * 0.67}px`};
    }
    @media (min-width: 900px) {
        height: ${({ h }) => `${h * 0.5625}px`};
    }
`
const CarouselScroller = styled(Box)`
    width: 100%;
    height: 100%;
    white-space: nowrap;
`
const CarouselItem = styled(Box)`
    display: inline-block;
    width: 100%;
    height: 100%;
    margin-right: 16px;
    background-color: #fff;

    section{
        display: flex;
        flex-direction: column;
        height: 100%;                
        @media (min-width: 600px) {            
            height: 100%;                
        }

        @media (min-width: 600px) {
         flex-direction: row;
        }
        div{
            overflow: hidden;
            white-space: normal;
        }

        div:first-of-type{
            width: 100%;
            height: calc(100% - 58%); 
            position: relative;
            
            @media (min-width: 600px) {
                width: 58%;    
                height: 100%;            
            }
        }
        div:last-of-type{
            width: 100%;
            height: 58%;
            padding: 1rem;
            color: #000;
            @media (min-width: 600px) {
                width: calc(100% - 58%);                
                height: 100%;                
            }

            h1{
                font-size: 32px;
                font-weight: 400;
                color: ${projectColors.primary};
            }
            h3{
                font-size: 24px;
                font-weight: 400;
                /* max-width: 80%; */
                margin-top: 16px;
                color: #8b8b8b;
                @media (min-width: 600px) {               
                    margin-top: 24px;
                }
            }
            p{
                font-size: 16px;
                font-weight: 400;
                /* max-width: 80%; */
                margin-top: 8px;
                color: #353535;
                line-height: 1.5;
                @media (min-width: 600px) {               
                    margin-top: 48px;
                }
            }

            article{
                display: block;
                padding: 1rem 0;

                a{
                    font-size: 18px;
                    font-weight: 500;
                    color: ${projectColors.secondary};

                    &:hover{
                        color: ${projectColors.tertiary};
                    }
                }

                @media (min-width: 600px) {
                    margin-top: 48px;
                }
            }
        }
    }
`
const CarouselNextButton = styled(Button)`
    z-index: 2;
    flex-grow:1;
    background-color: transparent;
`
const CarouselPrevButton = styled(Button)`
    z-index: 2;
    flex-grow:1;
    background-color: transparent;
`

// const items = [1, 2, 3, 4, 5]

const Carousel = () => {
    // const widthSpan = 880 + 16; // width of the div and the right margin for spacing
    const [currentIndex, setCurrentIndex] = useState(0);

    const [mouseInitialPosition, setMouseInitialPosition] = useState(0);
    const [mouseEndPosition, setMouseEndPosition] = useState(0);
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseSwiped, setMouseSwiped] = useState(false);
    const [makeTimer, setMakeTimer] = useState(true);

    const [widthSpan, setWidthSpan] = useState(0);

    const scrollerRef = useRef<any>(null);
    const width = scrollerRef;
    const handleScreenSize = () => {
        setWidthSpan(width.current?.clientWidth + 16);
        setCurrentIndex(0);
        handleJumpToSlide(0);


    }

    useEffect(() => {
        setWidthSpan(width.current?.clientWidth + 16);
        window.addEventListener("resize", handleScreenSize);

        return () => window.removeEventListener("resize", handleScreenSize);

    }, [currentIndex]);

    useEffect(() => {
        if (makeTimer) {
            const timer = setInterval(() => {
                let newPosition = currentIndex;
                if (newPosition < rooms.length - 1) {
                    newPosition += 1;
                } else {
                    newPosition = 0;
                }

                setCurrentIndex(newPosition);
                handleTranslateFullSlide(newPosition);
            }, 5000);

            return () => clearInterval(timer);
        }
    }, [currentIndex, makeTimer])


    const handleScrollNextSlide = () => {
        let newPosition = currentIndex;
        if (newPosition < rooms.length - 1) {
            newPosition += 1;
        }

        setCurrentIndex(newPosition);
        handleTranslateFullSlide(newPosition);
    }

    const handleScrollPrevSlide = () => {
        let newPosition = currentIndex;
        if (newPosition > 0) {
            newPosition -= 1;
        }

        setCurrentIndex(newPosition);
        handleTranslateFullSlide(newPosition);
    }
    const handleJumpToSlide = (index: number) => {
        setCurrentIndex(index);
        handleTranslateFullSlide(index)
    }

    const handleTranslateFullSlide = (newPosition: number) => {
        const translateTo = -widthSpan * newPosition;
        scrollerRef.current.style.transform = `translate3d(${translateTo}px, 0px, 0px)`;
    }
    const handleTranslatePartialSlide = (toTranslate: number) => {
        let partialTranslate = (-widthSpan * currentIndex) + toTranslate;
        scrollerRef.current.style.transform = `translate3d(${partialTranslate}px, 0px, 0px)`;
    }

    //////////////////////////////////////////////////// Start Mouse Events /////////////////////
    const handleMouseDown = (e: any) => {
        if (e.type === "mousedown") {
            e.preventDefault();
            setMouseInitialPosition(e.clientX);
            setMouseEndPosition(e.clientX);
        }
        else if (e.type === "touchstart") {
            setMouseInitialPosition(e.targetTouches[0].clientX)
            setMouseEndPosition(e.targetTouches[0].clientX);
        }

        setMouseDown(true);
        // console.log("toch: ", e.type);

    }
    const handleMouseMove = (e: any) => {
        if (mouseDown) {
            let mousePositionDelta = mouseEndPosition - mouseInitialPosition;
            if (e.type === "mousemove") {
                e.preventDefault();
                setMouseEndPosition(e.clientX);
            }
            else if (e.type === "touchmove") {
                setMouseEndPosition(e.targetTouches[0].clientX);
            }


            handleTranslatePartialSlide(mousePositionDelta);
            setMouseSwiped(true);
        }
    }
    const handleMouseUp = () => {
        if (mouseSwiped) {
            if (mouseInitialPosition - mouseEndPosition > 100) {
                handleScrollNextSlide();
            }
            else if (mouseInitialPosition - mouseEndPosition < - 100) {
                handleScrollPrevSlide();
            } else {
                handleJumpToSlide(currentIndex);
            }
        }
        setMouseDown(false);
        setMouseSwiped(false);
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#F5F5F5",
                overflow: "hidden",
                paddingTop: "64px",
                paddingBottom: "96px",
            }}
        >
            <Box>
                <Typography
                    variant='h1'
                    sx={{
                        textAlign: 'center',
                        marginBottom: "34px",
                        fontSize: "48px",
                        fontWeight: 400
                    }}
                >Our Rooms</Typography>
            </Box>
            <Container
                maxWidth="md"
                sx={{
                    // backgroundColor: "#EFEFEF", 
                    height: "100%"
                }}
                onMouseEnter={() => setMakeTimer(false)}
                onMouseLeave={() => setMakeTimer(true)}
            >
                <CarouselContainer>
                    {/* <CarouselPrevButton
                        onClick={handleScrollPrevSlide}
                    >Prev</CarouselPrevButton> */}
                    <CarouselScrollerContainer
                        h={widthSpan}
                    >
                        <CarouselScroller
                            ref={scrollerRef}
                            sx={{
                                transition: "all .5s ease-out",
                                // transition: !mouseDown && "all .2s ease-out",
                                cursor: mouseDown === true ? "grabbing" : "grab",
                            }}

                            onMouseDown={(e) => handleMouseDown(e)}
                            onMouseMove={(e) => handleMouseMove(e)}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}

                            onTouchStart={(e) => handleMouseDown(e)}
                            onTouchMove={(e) => handleMouseMove(e)}
                            onTouchEnd={handleMouseUp}
                            onTouchCancel={handleMouseUp}
                        >
                            {rooms.map((room, indx) => (
                                <CarouselItem
                                    key={indx}
                                >
                                    <section>
                                        <div>
                                            <Image src={room.image} layout='fill' objectFit='cover' alt={room.label} />
                                        </div>
                                        <div>
                                            <h1>{room.label}</h1>
                                            <h3>This comfort and elagant room excepts 3 max adults</h3>
                                            <p>{room.description.length > 200 ? room.description.substring(0, 200) + "..." : room.description}</p>
                                            <article>
                                                <Link href={`/room-detail/${slugify(room.label)}`}>Ream more</Link>
                                            </article>
                                        </div>
                                    </section>
                                </CarouselItem>
                            ))}
                        </CarouselScroller>
                    </CarouselScrollerContainer>
                    {/* <CarouselNextButton
                        onClick={handleScrollNextSlide}
                    >Next</CarouselNextButton> */}
                </CarouselContainer>
                <Box
                    sx={{
                        height: "40px",
                        width: width.current?.clientWidth,
                        margin: "1rem auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: 'relative',
                        overflow: "hidden",
                        flexGrow: "3"
                    }}
                >
                    <CarouselPrevButton
                        onClick={handleScrollPrevSlide}
                    ><BsArrowLeft size={24} /></CarouselPrevButton>
                    {rooms.map((items, idx) => (
                        <div key={idx}
                            style={{
                                display: "inline-block",
                                height: "4px",
                                width: "10%",
                                backgroundColor: currentIndex >= idx ? "red" : "black",
                                border: `1px solid ${currentIndex >= idx ? "red" : "black"}`,
                                transition: "all 0.5s ease-in-out",
                            }}
                        ></div>
                    ))}
                    <CarouselNextButton
                        onClick={handleScrollNextSlide}
                    ><BsArrowRight size={24} /></CarouselNextButton>
                </Box>
            </Container>
        </Box>
    )
}

export default Carousel;