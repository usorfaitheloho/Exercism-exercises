class SumOfMultiples
  def initialize(*magical_items)
    @magical_items = magical_items
  end

  def to(level)
    multiples = []
     @magical_items.each do |item|
       multiples += (1...level).select{|n|n%item == 0}
     end
    multiples.uniq.sum
  end
end
