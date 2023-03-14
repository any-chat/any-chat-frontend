import { Box, Divider, Grow, IconButton, List, ListItem, ListItemButton, Stack } from "@suid/material";
import { useLayoutContext } from "../contexts/LayoutContext";
import AddIcon from '@suid/icons-material/Add';
import ChatBubbleOutlineIcon from '@suid/icons-material/ChatBubbleOutline';
import DeleteOutlineIcon from '@suid/icons-material/DeleteOutline';

import {
	createNewSession,
	deleteSession,
	getAllSessions,
} from "../hooks/sessions";
import { For, Show } from "solid-js";
import { useNavigate, useSearchParams } from "@solidjs/router";

export default function SessionList() {
	const layoutContext = useLayoutContext();
	const sessions = getAllSessions();
	const navigate = useNavigate()
	const [sp] = useSearchParams()

	return (
		<List class="flex flex-col space-y-1" sx={{
			fontSize: layoutContext.drawer.visible ? "1rem" : "12px",
		}}>
			<ListItem disablePadding class="w-full mb-2">
				<ListItemButton onClick={createNewSession} alignItems="center" class="flex justify-between">
					<AddNewSesson />
				</ListItemButton>
			</ListItem>
			<Divider />
			<Show when={sessions().length > 0} fallback={
				<Box class="w-full text-center pt-12px text-[#666]">暂无会话</Box>
			}>
				<For each={sessions()}>
					{(session, idx) => (
						<Grow appear in={true} {...{ timeout: idx() * 100 }}>
							<ListItem disablePadding secondaryAction={
								layoutContext.drawer.visible ? (<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => deleteSession(session.id)}
								>
									<DeleteOutlineIcon />
								</IconButton>) : null
							}>
								<ListItemButton onClick={() => navigate(`/session?si=${session.id}`)} selected={`${session.id}` === sp.si}>
									<ChatBubbleOutlineIcon class="mr-12px" sx={{ fontSize: '22px' }} />
									<Box component="span" sx={{ fontSize: 'fontSize.default' }}>
										<Show when={layoutContext.drawer.visible}>
											<Box sx={{ color: "color.default", textDecoration: 'none' }}>会话{sessions().length - idx()}</Box>
										</Show>
									</Box>
								</ListItemButton>
							</ListItem>
						</Grow>
					)}
				</For>
			</Show>

		</List>
	)
}

function AddNewSesson() {
	const layoutContext = useLayoutContext();

	return (
		<Box
			component={Stack}
			justifyContent="center"
			alignItems="center"
			direction={layoutContext.drawer.visible ? "row" : "column"}
		>
			<div class="flex justify-center items-center">
				<AddIcon class="mr-6px" />
			</div>
			<Show when={layoutContext.drawer.visible}>创建新会话</Show>
		</Box>
	)
}
