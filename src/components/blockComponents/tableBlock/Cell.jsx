export default function Cell({text}) {
    return  <td key={crypto.randomUUID()}>{text}</td>
}