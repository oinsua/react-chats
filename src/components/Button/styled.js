import styled from '@emotion/styled';

export const Button_Form = styled.button`
                                display: inline-block;
                                margin: 0;
                                background-color: var(--brand-color_12);
                                color: var(--theme-body-txt);
                                font-size: 0.8rem;
                                padding: .2rem;
                                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                                font-weight: 900;
                                width: 70px;
                                height: 36px;
                                border: none;
                                border-top: 2px solid var(--theme-body-txt);
                                border-left: 2px solid var(--theme-body-txt);
                                border-bottom: 2px solid var(--theme-body-txt);
                                border-top-right-radius: 10px;
                                border-bottom-right-radius: 10px;
                                letter-spacing: 1px;
                                text-transform: uppercase;

                                &:hover{
                                    background-color: var(--brand-color_8);
                                }
`