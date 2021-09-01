<template>
	<!-- component -->
	<div class="h-screen bg-dogeblue-primary bg-cover">
		<div class="flex flex-row h-full justify-center">
			<div class="flex justify-center self-center">
				<div class="w-100 mx-4 p-6 rounded-lg bg-white md:p-12">
					<h1 class="font-bold text-4xl text-center md:text-5xl">
						<a href="/">Dr. Machine</a>
					</h1>
					<p class="mb-4 text-center">Intelligent Medical Imaging</p>
					<hr />
					<div class="my-4">
						<h3
							class="
								font-semibold
								text-center text-1xl text-gray-800
								md:text-2xl
							"
						>
							Log in to your account
						</h3>
					</div>
					<div class="space-y-5">
						<div class="space-y-2">
							<label
								class="
									text-sm
									font-medium
									text-gray-700
									tracking-wide
								"
								>Email</label
							>
							<input
								class="
									w-full
									text-base
									px-4
									py-2
									border border-gray-300
									rounded-lg
									focus:outline-none
									focus:border-dogegreen
								"
								type="email"
								placeholder="email@domain.com"
							/>
						</div>
						<div class="space-y-2">
							<label
								class="
									mb-5
									text-sm
									font-medium
									text-gray-700
									tracking-wide
								"
							>
								Password
							</label>
							<input
								class="
									w-full
									content-center
									text-base
									px-4
									py-2
									border border-gray-300
									rounded-lg
									focus:outline-none
									focus:border-dogegreen
								"
								type="password"
								placeholder="************"
							/>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<input
									id="remember_me"
									name="remember_me"
									type="checkbox"
									class="
										h-4
										w-4
										bg-blue-500
										focus:ring-blue-400
										border-gray-300
										rounded
									"
								/>
								<label
									for="remember_me"
									class="ml-2 block text-sm text-gray-800"
								>
									Remember
								</label>
							</div>
							<div class="text-sm text-center">
								<a
									href="#"
									class="text-dogegreen hover:underline"
								>
									Forgot your password?
								</a>
							</div>
						</div>
						<div>
							<button
								type="submit"
								class="
									w-full
									flex
									my-4
									justify-center
									bg-dogegreen
									hover:bg-dogeblue-primary
									hover:text-dogegreen
									text-white
									p-3
									rounded-lg
									tracking-wide
									font-semibold
									shadow-lg
									cursor-pointer
								"
							>
								Log in
							</button>
							<div class="text-sm text-center mb-3">
								Don't have an account?
								<a
									href="#"
									class="text-dogegreen hover:underline"
								>
									Register
								</a>
							</div>
						</div>
					</div>
					<hr />
					<div class="pt-5 text-center text-dogeblue-primary text-xs">
						<span>
							Copyright 2021
							<span class="text-dogegreen font-bold"
								>Dr. Machine</span
							>.</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'bare',
}
</script>

<style lang="scss" scoped>
</style>
