interface EyeOpenProps {
  className?: string
}

export default function EyeOpen({ className }: EyeOpenProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 15.8299C9.88619 15.8299 8.17004 14.1138 8.17004 11.9999C8.17004 9.88606 9.88619 8.16992 12 8.16992C14.1139 8.16992 15.83 9.88606 15.83 11.9999C15.83 14.1138 14.1139 15.8299 12 15.8299ZM12 8.66992C10.1639 8.66992 8.67004 10.1638 8.67004 11.9999C8.67004 13.8361 10.1639 15.3299 12 15.3299C13.8362 15.3299 15.33 13.8361 15.33 11.9999C15.33 10.1638 13.8362 8.66992 12 8.66992Z"
        fill="#B1B2B4"
        stroke="#B1B2B4"
      />
      <path
        d="M12 21.0205C8.23996 21.0205 4.68996 18.8205 2.24996 15.0005C1.18996 13.3505 1.18996 10.6605 2.24996 9.00047C4.69996 5.18047 8.24996 2.98047 12 2.98047C15.75 2.98047 19.3 5.18047 21.74 9.00047C22.8 10.6505 22.8 13.3405 21.74 15.0005C19.3 18.8205 15.75 21.0205 12 21.0205ZM12 4.48047C8.76996 4.48047 5.67996 6.42047 3.51996 9.81047C2.76996 10.9805 2.76996 13.0205 3.51996 14.1905C5.67996 17.5805 8.76996 19.5205 12 19.5205C15.23 19.5205 18.32 17.5805 20.48 14.1905C21.23 13.0205 21.23 10.9805 20.48 9.81047C18.32 6.42047 15.23 4.48047 12 4.48047Z"
        fill="#B1B2B4"
      />
    </svg>
  )
}
