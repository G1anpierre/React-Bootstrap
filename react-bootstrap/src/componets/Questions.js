import React, { Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import './faq.scss';

const Faq = _ => {
	return (
		<Fragment>
			<div className="content faq">
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="col-12 col-md-10">
							<div className="faq__general-title">
								<div className="faq-title">
									<h1 className="title">Frequently Asked </h1>
									<h1 className="title">Questions</h1>
								</div>
							</div>

							{/* Accordion */}
							<Accordion defaultActiveKey="0" className="faq-accordion">
							
								{/* General */}

									<div>	
										<Accordion.Toggle as={Card.Header} eventKey="0" className="faq__card">
										<div className="head d-flex justify-content-between align-items-center ">
											<h2 className="head__title mb-0">General</h2>
											<button className="btn button-icon" type="button">
												<i className="fas fa-plus"></i>
											</button>
										</div>

										<Accordion.Collapse eventKey="0">
										<div>
											<div className=" body">
												Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
												terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
												skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
												Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
												single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
												helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
												proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
												beer farm-to-table, raw denim aesthetic synth nesciunt you probably
												haven't heard of them accusamus labore sustainable VHS.
											</div>
										</div>
										</Accordion.Collapse>
										</Accordion.Toggle>
										
									</div>
								

								{/* Company */}

								<div className="card faq__card">
									<div
										className="card-header header"
										id="headingOne"
										data-toggle="collapse"
										data-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										<div className="head d-flex justify-content-between align-items-center ">
											<h2 className="head__title mb-0">Company</h2>
											<button className="btn button-icon" type="button">
												<i class="fas fa-minus"></i>
											</button>
										</div>
										<div
											id="collapseOne"
											className="collapse show"
											aria-labelledby="headingOne"
											data-parent="#accordionExample"
										>
											<div className="body card-body">
												<div className="company-content">
													<div className="company-content__item">
														<h4 className="title">How are Projects</h4>
														<p className="text">
															All consultation calls and research projects are priced in
															credits. Companies can top up their credits easily in the
															dedicated area on their SIMETIA dashboard, either by credit
															card or by making a wire transfer. SIMETIA pays researchers
															for the services rendered.
														</p>
													</div>
													<div className="company-content__item">
														<h4 className="title">How Much do sercives cost</h4>
														<p className="text">
															
														</p>
													</div>
													<div className="company-content__item">
														<h4 className="title">How Many Researchers can I Speak to?</h4>
														<p className="text">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
														terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
														skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
														Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
														single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
														proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
														beer farm-to-table, raw denim aesthetic synth nesciunt you probably
														haven't heard of them accusamus labore sustainable VHS.
														</p>
													</div>
													<div className="company-content__item">
														<h4 className="title">
															How many Researchers can I Request Project Quotations from?
														</h4>
														<p className="text">
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
														terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
														skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
														Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
														single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
														helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
														proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
														beer farm-to-table, raw denim aesthetic synth nesciunt you probably
														haven't heard of them accusamus labore sustainable VHS.
														</p>
													</div>

													<div className="company-content__text-info">
														<p className="text-link text-center">
															For any other questions, feel free to contact us{' '}
															<span className="link">
																<a>here</a>
															</span>
															.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Researcher */}

								<div className="card faq__card">
									<div
										className="card-header header"
										id="headingOne"
										data-toggle="collapse"
										data-target="#collapseOne"
										aria-expanded="false"
										aria-controls="collapseOne"
									>
										<div className="head d-flex justify-content-between align-items-center ">
											<h2 className="head__title mb-0">Researcher</h2>
											<button className="btn button-icon" type="button">
												<i class="fas fa-plus"></i>
											</button>
										</div>
										<div
											id="collapseOne"
											className="collapse"
											aria-labelledby="headingOne"
											data-parent="#accordionExample"
										>
											<div className="card-body">
												Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
												terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
												skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
												Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
												single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
												helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
												proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
												beer farm-to-table, raw denim aesthetic synth nesciunt you probably
												haven't heard of them accusamus labore sustainable VHS.
											</div>
										</div>
									</div>
								</div>
							
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Faq;
