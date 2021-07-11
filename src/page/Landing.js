import React ,{useState} from 'react';
import {ArrowDown} from '../assets/images'
import Navbar from './Navbar'
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';

const Landing = ()=>{
    const [fullpage, setfullpage] = useState(null);
    return (
        <>
        <Navbar show={true} fullpage={fullpage}/>
        <div className="landing">
        <ReactFullpage
            scrollingSpeed = {1800}
            anchors = {['header', 'service', 'team', 'contact','footer']}
            lockAnchors={false}
            render={({ state, fullpageApi }) => {
            setfullpage(fullpageApi);
            return (
                <ReactFullpage.Wrapper>
                <div  className="section header">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="title">Dr. Machine</h3>
                        <p className="text">Intelligent Medical Imaging</p>
                        <button type="button" class="btn mt-4 start">Get started!</button>
                    </div>
                </div>
                <div  className="section one">
                <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-md-3">
                    <div class="card">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABZVBMVEUAAAABt/8AAAMAuP8DAAAAAAYAuf8GAAAGu/8Duv8AAQAAvf8BAggBAQsBAQ0BAgUBAxIBABIBBBoDACMCBRcDBB8EADYEADoCADEBBSsABBgDAGACBhUDAFoBBBwDACkJqPgHAEYDAEIFsv8HDSUDBygBBzIDADMBBx0BAE0BDm8DHH8HOZEHS6kEV7EHWbcEH3MDCmQBAFMGSKsHbMUGh98Dm+4JYLUFQZMFFW0JQKgIdtQGluYJaLoJLIINou8HfdQEIYoGM5YFFV8Go+0IM2cLX6AQe8QMQW0NFT0IIEYHb7cHF0kJVIEHAE8JjM0JOoMLYM8QHV4LL3sKJVkKhtYPdtwRNGwGUZ0JlNUMcN0HPnIISIwKYZ4MWowJL3EJhr0JL1YHHjkJI1QFGz4KouIIdrAKTYcJa5cEkPQIRmkGMU0Ifa8DJ6AKSYkEmv0Fg/ADd/UEPcYIY6kEW+oLR7wJWeigtJP9AAANIUlEQVR4nO2di18TxxbHZ+exO5t9v5IQMQkJAV8otRqxBbGSghSUSrVKFVu9hda+7q3V+/ffmU2CYHay0VtNGeb7+YhKsvns/j7nnDlzzswEAIVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFArF+wPhuO/geAAzGPc9/cNIBeE/uDaeDUkf2wNKsbfoC+IxILGJ08W2mV6Q/469phTrwXRgqkDbtl3f9YM4jsPq5GQc+C7D5i8BosTqGRW3H8dxfb+atFoTM7XZcrFYmi3P1GqtM3GlwhWzPchcctx3O2Zg16xsJ64krYlS4+ypc+cvzF28eOnipUtzF+Y/udwolltJhRmZk7rjSTUv2AvphPjxZNKaPXvq/KdXrrbrTUStFKo36+2r1xauXy7WkjMxj2Jp8Br3jY8D/uDEI44fnmkVp8599nm7yfTRdU1DXXRT1yiXbHHpxuXiTBL6DvFOrF7MqDx3MplpnPrs8zqzJKQhTUv/cBBK/410hCxreWn+bLkVusy4yMnzxTRY2W48PdM4d6lNTVMbim41HyxcLkdxwEL9SdMKpJlCnLTOnr9SZ67GPG64WIia1vLF07NRhSUT4CQZFzMrz3Piaqt07kqTouE6vQFZ7YXGTOK7xDtJ4yJPFtzpmdOX6lTXRhZL0yi9Ol+KqizQgxOTdbHI7pxplc5ftdA7aYV47Fo6Xa6kWde4n+KjwBzIdsOJu3NNKyesZxqXtXijmASpK477ST4CkDhBUj51k2rmO1hVH10zm9ca1Uk2Kkruid3aAgvts1+06bs44BFMenNqohJw05JZLl4/ICRoNW4138MDezCNrcXLE6HryT4ksgmLnzTmmigvsWKplS4wPfaa1V6pVWzojftxPiS8EOpPly42rVzzMRmW2FOtznyt6toS2xZksT1uNeZENtOdCrKgpLV17cGXq2uaxf6Lst6MaOd6OU7rEJJCPM8Ny3PZ9oIQ1amldZq6bq1N3X68TgD+aq2pUT07F6PLK1HssKnAuJ/qA8G0SooXmjRLK900O4sbm8TAJFqvYYyB7RFgYOfOnpV5gaZ37k5MQltS0/JspzpzvZ7x6AhZ2tZtgJmnFtK3pkVk2y5AzH55Z42FsMEBAZlbpYRNq2U0LQhtx584vZgV23W6tokNHtPYEAC73Zz0b/bDw9h41rEGPRFp1kYtduWMW4SwpOFKVpEB6asYE96V6I9usN8g4wk/08t9ujxokIiir6OQe6tk8NTdCYtzWXk70h4Z/U7roT70m39CFryK7UGTRGZnKnGILV0iz5wwjuabdDAbRfo9l0Wmgab94f9BB1+oD8isI+vmTOIS+fzQds+Ubg6mmcjUdiOjJ03WdV3bwsH2YkaMR/o3tdghconFQrcbl+fo4IxQ71y7bxQOIlTWpekLxjcPsqaTZqfEHFGyJgZkU8K77azx/9urX2IyNOp0lXj4bebcmz6qhY5MYvHobsfli4MDmqnvfHMf5zUg+MsG/s7MzOQ7jSRwZBILeMRtXV4eNCy6N0NY1jCCWND4KXvaYz2KJl2ZxOIFv9rC24VRZJrtWQLyCy2pWPhxdlUHdRpV15EojfdsN2lcfdsLdY0uGHiErhZ/S8FYy64XIuvJhCtT69Ujce28NjC/MxdvYDhCxzR9R2NZVNdZng1taXItpodbLV0ZyMCRtToBci2rn1Q8EdZWre+TkEhTj4fMC0/XB1P3+iYguQsge0k8fiysrlprEcseJBELci+cG8wb6M3ZEdbE9C1rU1hjRvWpxJUkaPHCe7V4MyPJuoBHWFjbtyzQEfvh14krSaGGV96Ts/VBL6JLxgitv75YotGQf9BGVJEk0yLE8aOFjFKnuYh7ayXFFx8qQ/xhaQLb0peLiSPH4gcInbB8xcoQawsf7BcQX9yjgI2OyLSotp24clgWhHa1tJjxoKhjgJG6yl21wK5oPET0SeITKfo8kLjJ3cHKHXvGZmWknRN9R3woWvemWxu1ihRisfjuJzeyxn1kPQNe7pB/UCwF31NRzDIXa5OOBLV49pR2HGVUZ7hYT4GXu+LxsFiiTEvvNEJXgpjFntMOo6WscIOsfeCBEYpZvQh/TSgW0rblEMsjXly+mRmb6RogkORsAuhbVgF0hiwn2eZ9i4/1TB8MXiQNi5n1c0R3cHdP4dAPOEi0ftDFaemTyJGg8MA3nVQb7UyxUDPB+RE+/RSu1jPxKnBrNZJhwsMDfLUxWHLgYml01/BGMojUsvBW9goRLtYGS7QkEIvnpFOZYvFGVohHFQt6+Lmw8GCuRb4MluXZJJyqC6KNtWrAUSpRadQi+GlG47FvWa4Ei4/4yqFwKqNj2H3I+joZZYtqr/KA9wSfQzeqUrghi1mVqbYg2iBrAzijzQ7ZJxGhI9KNUBax4uIDUWhG2r8wyd9v2a3keB6+kz0iyiRWOaNO2n/MLQPkpVo9sVh6CwyU+UmmLGLxzv1ga+cAaxfnVZf7Ex4PGs+zVbdWq3IEeCZWdE0oFjLpMwxHEQt4Bv5xLztmWbuxDGLxUBMnC0I3RJq5R0aaTQNc2aGCvVH0YSBHqRSSIBKLxc1if0SxfhWXHe5LI5YTbTeHbAGzmkneQVBdsYQZPGpuVkbJQP7p8D1zbtjIWON4SK1VHuOHfkoqViAQC6G9KJChy5puMAzLmdW/PuaWkbPnORXL+EXY3tkPfBnE4ouz0qAlNi2EOiNZ1nNR31CzfqrIUM7iEOJHK8P2raJma6hl9VIH4wfBMKFrLGRJ0mQlthM22sM2+ZrPhlpWX6wdwWdYnYlYErH4brBwRjg75NDb+W4I8I7IlekG8eVwQsAX/jnhX8M2RVu7uQEeACxu38uSknI84iYr4kwL6WlaOuwTUjf8WZCT6p1aLNEKXJbE17JWO/QeVn+xkB+zAPglYx+dltbEsC/PrkP2pL77SJhpmfQJzhkN+Q/ws0AstBm4x79134ev/QummqIsSTe/F2rVC0U2xsa6lnm+AaKLhBmWLCGre65YsCY6UUyvl4RTw96vDePXfT1j+x2/mj52HXm8sLtSMtgW5aXmIhaJVWCpPZtA/7LfoZaOsuozLP2vuRIZVte0/KpofkgfCLc6GXd+29ljIXzIyW3WU8e1ZTrENN3pFItardYjgVhsOkiprpu6uG/PDSsgI7XTjhHEdiuPMuuc5ovrmV7IW1+3M5aiHkE3H/s26R1wIA3EtoPkQZYjmlvZpT/eVb2TnS28gW5hV4ay31FYiOdpvP7WyTJIp+0FIzNL4hsFfh5S2ekehVQMHHlyrAOg5wThxbeOStGR9eL3Gj8qJOMCWDD2c45Dsh4TV6a0oQc/ZsypRotHgxCl7etBplT8CoyHLfZLVykH/HwV2byQUWCOGDw8dBoUYjnBi08AKWQ/LPttbPwmPkNL1+lOEtrS7J07AstM7cDdOOSHpvbdZQJFxXMIHMfA+0K1dNTcDOzRFsMdO/jyDyeItg4GOFq/V+QnPwlNw3eYJ66J1KL0D+I6UvQpBuHTaeIG0U43DiHr35/VgGfbwqNkIH8FCm2LrmLfk2CJcibpUkfousW9rlr/+YKf9UGGLKFhE2TitmY3MnNZa9fwHcky96MUbOaJjQeUxZs/f5/1SfoNKMIHhn5ICsn8yxcD5QqErC3Hl2avrwDIj8M4dUlr/vlyJXa84WIVgN+KAWjcerufjTS6VnUceXaRZ8M8kfjR/Is/X16fqbhMLDg06mB7fdp33b8Op7JIR7q24QaEyDkQvoHNYWzw/LtXL+eLCf8eInt4RlnAYL1VrG0dzWStzpdOwL+Q52Pd9diA+Pm9l+cb/LhfwsUa7kkE4Mbd3SNzJJOulYIKkXYgfAPx8I/3vijNtio8XI1yhRMdWXSrU3MXB+5o1x5zCnj99fUo5FspR9vxm67KOuSFdOd+ENsynxP8BghulFyfwBG//Itvq2h1emLpvB27FQWTLpDfBTmF1gzfJzaqXbC3TX51MPmmVHtqBK4sq4tycSZskNOqf4uHnwZLtButtP3IcL1hOb9csLnxO3Lh3kJjWbcsq7NbxoGTVhlORMQCwBMUr8Rs33u1vWQ1136qAv7dfTlL5qXi3R905rNX97aXNgF0eDnmJGQM/wf+9n9ffb2ZhvWTEtjfH1y+9er1V65N4EnywPekkNRev7zgGEqqUfCrs69v3Re0gBRHga1g5fWNd045TihxAm7Nb8td5/ubKICC70/c2p4e940cD8hkQFbmN8d9G8eECei68yvr476N40ES287E/ApWqcMIQIfNKLfn141x38hxoOAAAirz29OT476T44AHPQJmV26tq/whjzRUEQKmo2mVx+cBYYHpRSCeTGRbafsB6J7a4wFSCcd9K/98oMPF4pKpND6PVKj0mKOCRNsKPxgkPTWKBy5VVs4F9kVSNfhc4IFI0n6r6N8I7PfroQSnTX9oIDhYjKXEygPmnwqoOIwSS6FQKBQKhUKhUCgUimPG/wDPlA3DAVNTiwAAAABJRU5ErkJggg==" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">start with step one</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card">
                            <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">start with step one</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX14YRakcWrj9HeynSGrUP89tnvKtnqLv1vcWNfDnhG_c_hRAy2yVqM3qBNT5z8Pxoclk&usqp=CAU" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">start with step one</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                <div  className="section two">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src="https://svi.nl/dl3117" class="img-fluid"/>
                        </div>
                        <div className="col-md-7">
                        <div className="d-flex flex-column h-100">
                            <div className="title">Big company <br/> announcement</div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nunc tempor risus mattis aliquam. Phasellus maximus urna lectus, in mattis lorem hendrerit eu. Cras ultricies eleifend ipsum eleifend elementum. Praesent et felis nisl. Sed in ipsum id nunc fermentum tristique. Morbi nec tincidunt sapien. Proin condimentum dolor libero, ac viverra felis maximus vel. Aenean viverra nunc vel porta facilisis. Vestibulum accumsan, ipsum nec dictum malesuada, mi nibh tincidunt sapien, a laoreet risus sapien eu elit. Proin ac mattis sapien. In maximus eget nisl non bibendum. Aenean purus purus, cursus in ipsum eu, vehicula volutpat sapien. Morbi vehicula egestas nulla, ac fermentum turpis sollicitudin mollis. Aliquam cursus lacinia ligula et imperdiet.</div>
                            <div className="mt-3">
                                <button type="button" class="btn btn-light px-5">Button</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div  className="section three">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX14YRakcWrj9HeynSGrUP89tnvKtnqLv1vcWNfDnhG_c_hRAy2yVqM3qBNT5z8Pxoclk&usqp=CAU" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nunc tempor risus mattis aliquam. Phasellus maximus urna lectus, in mattis lorem hendrerit eu. Cras ultricies eleifend ipsum eleifend elementum.</h5>
                                    <div className="more mt-4">
                                        <ArrowDown width="50" fill="#7d7d7d"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX14YRakcWrj9HeynSGrUP89tnvKtnqLv1vcWNfDnhG_c_hRAy2yVqM3qBNT5z8Pxoclk&usqp=CAU" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nunc tempor risus mattis aliquam. Phasellus maximus urna lectus, in mattis lorem hendrerit eu. Cras ultricies eleifend ipsum eleifend elementum.</h5>
                                    <div className="more mt-4">
                                        <ArrowDown width="50" fill="#7d7d7d"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX14YRakcWrj9HeynSGrUP89tnvKtnqLv1vcWNfDnhG_c_hRAy2yVqM3qBNT5z8Pxoclk&usqp=CAU" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat nunc tempor risus mattis aliquam. Phasellus maximus urna lectus, in mattis lorem hendrerit eu. Cras ultricies eleifend ipsum eleifend elementum.</h5>
                                    <div className="more mt-4">
                                        <ArrowDown width="50" fill="#7d7d7d"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div  className="section footer fp-auto-height">
                    <p>Copyright 2021 <span className="color-primary">Dr.Machine</span></p>
                </div>
                </ReactFullpage.Wrapper>
            );
            }}
        />
        </div>
        </>
    )
}
export default Landing;