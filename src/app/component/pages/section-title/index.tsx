
type SectionTitleProps = {
    title: string;
    subtitle: string;
    className?: string;

}

export const SectionTitle = ({title,subtitle,className}: SectionTitleProps)=>{
return(
    <div >        
        <h3 className={className}>{title}</h3>
        <span className={className} >{subtitle}</span>
    </div>
)
}