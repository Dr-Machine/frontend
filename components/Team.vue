<template>
	<section class="bg-white border-b pt-5 pb-8" id="team">
		<div class="container w-screen mx-auto flex flex-wrap pb-8">
			<h1
				class="
					w-full
					mt-8
					mb-1
					text-5xl
					font-bold
					leading-tight
					text-center text-gray-800
				"
			>
				Team
			</h1>
			<div class="w-full">
				<client-only>
					<slick :options="slickOptions">
						<div
							v-for="(member, index) in team"
							:key="index"
							class="px-3 py-3"
						>
							<div
								class="
									w-80
									rounded-md
									cursor-pointer
									shadow-lg
									overflow-hidden
									hover:shadow-xl
									transform
									hover:scale-105
									duration-500
								"
							>
								<div class="bg-dogeblue-secondary p-4">
									<img
										src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
										class="rounded-lg"
										alt=""
									/>
								</div>
								<div class="p-4 bg-dogeblue-secondary">
									<h1 class="p-1 font-bold text-2xl">
										{{ member.name }}
									</h1>
									<h1
										class="
											mb-2
											font-semibold
											text-1xl text-gray-400
										"
									>
										{{ member.education }}
									</h1>
									<a :href="member.linkedin">
										<button
											class="
												text-sm
												font-semibold
												text-red-50
												bg-dogegreen
												py-1
												px-3
												border-2 border-dogegreen
												rounded-lg
												hover:bg-dogeblue-primary
											"
										>
											LinkedIn
										</button>
									</a>
									<a :href="member.github">
										<button
											class="
												text-sm
												font-semibold
												text-red-50
												bg-dogered
												py-1
												px-3
												border-2 border-dogered
												rounded-lg
												hover:bg-dogeblue-primary
											"
										>
											Github
										</button>
									</a>
								</div>
							</div>
						</div>
					</slick>
				</client-only>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Team',
	data() {
		return {
			team: [
				{
					image: '0.jpg',
					name: 'Parsa Esfahanian',
					education: 'MSc. Computer Science',
					linkedin: 'http://www.linkedin.com/in/parsa-esfahanian',
					github: 'https://github.com/pesfahanian',
				},
				{
					image: '1.jpg',
					name: 'Mahdi Yousefzadeh',
					education: 'PhD. Complex Systems',
					linkedin: '',
					github: '',
				},
				{
					image: '2.jpg',
					name: 'Bardia Rahmatian',
					education: 'BEc. Economics',
					linkedin: '',
					github: '',
				},
				{
					image: '3.jpg',
					name: 'M. Reza Nazeazdeh',
					education: 'PhD. Bioelectric',
					linkedin: '',
					github: '',
				},
			],
			slickOptions: {
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 4,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							arrows: false,
							centerMode: true,
							centerPadding: '40px',
							slidesToShow: 2,
						},
					},
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							centerMode: true,
							centerPadding: '40px',
							slidesToShow: 1,
						},
					},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							centerMode: true,
							centerPadding: '40px',
							slidesToShow: 1,
						},
					},
				],
			},
		}
	},
}
</script>
