<script lang="ts">
	import Container from '../components/Container.svelte';
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import TopAppBar, { AutoAdjust, Row, Section } from '@smui/top-app-bar';
	let baseurl = '/';

	import List, { Item, Text } from '@smui/list';
	import IconButton from '@smui/icon-button';
	import AddToHomeScreen from './AddToHomeScreen.svelte';
	import { Subheader, Separator } from '@smui/list';
	import { H6 } from '@smui/common/elements';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let open = false;

	let topAppBar: any;
	let mode = ['Presensi Cepat'];
</script>

<Drawer variant="modal" fixed={true} bind:open>
	<Header>
		<Title>Amikom Two</Title>
		<Subtitle>Aplikasi presensi</Subtitle>
	</Header>
	<Content>
		<List>
			<Separator />
			<Subheader components={H6}>Halaman</Subheader>
			<Item href="/">
				<Text>Presensi</Text>
			</Item>
			<Separator />
			<Subheader components={H6}>Mode</Subheader>
			<Item href="javascript:void(0)" class="hover:bg-fuchsia-600 bg-fuchsia-800">
				<Text class="text-white">Presensi Cepat</Text>
			</Item>
			<Item class="flex gap-2" href="javascript:void(0)">
				<Text>One Device</Text>
				<span class="text-sm bg-yellow-500 rounded px-2 py-1">Segera hadir</span>
			</Item>
			<Separator />
			<Subheader components={H6}>Lainnya</Subheader>
			<Item href="https://trakteer.id/binsarjr" target="_blank">
				<Text>Donasi</Text>
			</Item>
			<Item href="https://www.youtube.com/channel/UC1tigfnmYv0bU_XD0APcuBw" target="_blank">
				<Text>Youtube</Text>
			</Item>
			<Item href="https://www.linkedin.com/in/binsarjr/" target="_blank">
				<Text>LinkedIn</Text>
			</Item>
			<AddToHomeScreen />
		</List>
	</Content>
</Drawer>

<AppContent class="app-content">
	<main class="main-content">
		<TopAppBar bind:this={topAppBar} variant="fixed" class="bg-fuchsia-800">
			<Row>
				<Section>
					<IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
					<h1
						class="text-xl font-bold hover:cursor-pointer"
						on:click={() => {
							goto(baseurl);
						}}
					>
						Amikom TWO
					</h1>
				</Section>
			</Row>
		</TopAppBar>
	</main>
</AppContent>
<AutoAdjust {topAppBar}>
	<Container>
		<slot />
	</Container>
</AutoAdjust>
