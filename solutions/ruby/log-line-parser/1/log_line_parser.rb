class LogLineParser
  def initialize(line)
    @line = line
  end

  def message
    result = @line.split(":");
    return result[1].strip
  end

  def log_level
  result = @line.split(":");
    level = result[0].downcase
     logs= level.tr('[]','')
   return logs
  end

  def reformat
 message + " " + "(" + log_level + ")"
  end
end
