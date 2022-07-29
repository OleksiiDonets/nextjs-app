import { useState, useEffect } from "react"


export const useInfiniteScroll = (id:string) => {
  const [ statusLoad, setStatusLoad ] = useState(false);
  const [statusObservebale, setStatusObservebale] = useState(true);
  if(typeof window !== 'undefined'){
    const observebale = document.querySelector(`.${id}:last-child`)
    const observer = new IntersectionObserver((entry, observer) => {
      if(entry[0].isIntersecting){
        setStatusLoad(true);
        setStatusObservebale(false);
        observer.unobserve(entry[0].target)
      }
    },{
    });
    if(observebale && statusObservebale){
      observer.observe(observebale)
    }
  }
  return {
    statusLoad,
    statusObservebale,
    setStatusLoad,
    setStatusObservebale,
  }
}
