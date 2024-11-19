import { create } from 'zustand';

interface ModalState {
    isVisible: boolean;
    component: React.ComponentType | null;
    openModal: (component: React.ComponentType, height?: boolean, shouldGoBackOnClose?: boolean) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isVisible: false,
    component: null,
    openModal: (component) => {
        set({ isVisible: true, component });
    },
    closeModal: () => {
        set({ isVisible: false, component: null });
    },
}));