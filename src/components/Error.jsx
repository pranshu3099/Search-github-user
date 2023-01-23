import React from 'react'
import styled from 'styled-components'
const Error = () => {
  return (
    <Wrapper>
 <div>
    <h1>404</h1>
    <h3>Sorry Page not found</h3>
</div>
    </Wrapper>
    )
};

const Wrapper = styled.section`
place-items:center;
/* background-color: cyan;   */
height:100vh;
text-align:center;
h1{
    font-size:10rem,
}
h3{
    color:var(--clr-grey-3);
    margin-bottom:1.5rem;
}`

export default Error