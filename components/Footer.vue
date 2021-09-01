<template>
	<footer class="bg-dogeblue-primary">
		<div class="container mx-auto px-8">
			<div class="w-full flex flex-col py-6 text-center md:flex-row">
				<div class="flex-1 text-left">
					<p class="mb-2 pl-1 text-dogegreen font-bold">Legal</p>
					<hr
						class="border-b border-gray-100 opacity-25 mr-10 py-0"
					/>
					<ul class="list-reset my-4">
						<li
							class="mt-2 pl-1 inline-block mr-2 md:block md:mr-0"
						>
							<a
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
								class="text-white hover:text-gray-500"
								>Terms of service</a
							>
						</li>
						<li
							class="mt-2 pl-1 inline-block mr-2 md:block md:mr-0"
						>
							<a
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
								class="text-white hover:text-gray-500"
								>Privacy policy</a
							>
						</li>
					</ul>
				</div>

				<div class="flex-1 text-left">
					<p class="mb-2 pl-1 text-dogegreen font-bold">Socials</p>
					<hr
						class="border-b border-gray-100 opacity-25 mr-10 py-0"
					/>
					<ul class="list-reset my-4">
						<li
							class="mt-2 pl-1 inline-block mr-2 md:block md:mr-0"
						>
							<a href="#" class="text-white hover:text-gray-500"
								>LinkedIn</a
							>
						</li>
						<li
							class="mt-2 pl-1 inline-block mr-2 md:block md:mr-0"
						>
							<a href="#" class="text-white hover:text-gray-500"
								>GitHub</a
							>
						</li>
						<li
							class="mt-2 pl-1 inline-block mr-2 md:block md:mr-0"
						>
							<a href="#" class="text-white hover:text-gray-500"
								>Telegram</a
							>
						</li>
					</ul>
				</div>

				<div class="flex-1 text-left">
					<p class="mb-2 pl-1 text-dogegreen font-bold">Company</p>
					<hr
						class="
							border-b border-gray-100
							opacity-25
							mr-10
							py-0
							md:mr-0
						"
					/>
					<ul class="list-reset my-4">
						<li
							class="mt-2 pl-1 inline-block mr-2 md:block md:mr-0"
						>
							<a href="#" class="text-white hover:text-gray-500"
								>Team</a
							>
						</li>
						<li
							class="mt-2 pl-1 inline-block mr-2 md:block md:mr-0"
						>
							<a href="#" class="text-white hover:text-gray-500"
								>Careers</a
							>
						</li>
						<li
							class="mt-2 pl-1 inline-block mr-2 md:block md:mr-0"
						>
							<a href="#" class="text-white hover:text-gray-500"
								>Contact</a
							>
						</li>
					</ul>
				</div>
			</div>
			<hr class="border-b border-gray-100 opacity-25 my-0 py-0" />

			<div class="w-full mx-auto p-4 text-center text-white">
				Copyright 2021
				<span class="text-dogegreen font-bold">Dr. Machine</span>.
			</div>
		</div>
	</footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
	name: 'Footer',
	components: {
		logo: Logo,
	},
}
</script>
